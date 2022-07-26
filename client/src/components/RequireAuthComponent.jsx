import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

const requireAuthComponent=(Component,redirectUrl="")=>{
    return (props)=>{
        const userState=useSelector(s=>s.userState);
        const [isAuth,setIsAuth]=useState(false);
        const history = useHistory();

        useEffect(()=>{
            async function checkAuth(){
                if (userState.userToken && userState.userId){
                    //console.log("heloo");
                    const { data: res } = await axios({
                        method: "post",
                        url: "/api/user-checks",
                        headers: {
                            Authorization: `Bearer ${userState.userToken}`,
                        },
                        data: JSON.stringify({
                            userId: userState.userId,
                        }),
                    });
                    //console.log(res);
                    if (res.isAuthentificated) {
                      setIsAuth(true);
                    }else{
                        history.push({
                          pathname: `/login`,
                          search: `?redirectUrl=${redirectUrl}`,
                        });
                    }
                    
                }else{
                      history.push({
                        pathname: `/login`,
                        search: `?redirectUrl=${redirectUrl}`,
                      });

                }
            }
            checkAuth();
        },[userState.userId,history,userState.userToken])

    return (
        <div className=''>
            {
                isAuth?(
                    <Component {...props}/>
                ):(
                    <></>
                )
            }

        </div>
    )

        }
}

export default requireAuthComponent