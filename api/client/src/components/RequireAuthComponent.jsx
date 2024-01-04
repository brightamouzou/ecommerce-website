import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie'
const requireAuthComponent=(Component,redirectUrl="")=>{
    const cookies=new Cookies;
    return (props)=>{
        const userState=useSelector(s=>s.userState);
        const [isAuth,setIsAuth]=useState(false);
        const history = useHistory();

        useEffect(()=>{
            async function checkAuth(){

                try{
                    if (userState.userToken &&  userState.userId){
                        // const { data: res } = await axios({
                        //     method: "post",
                        //     url: "/api/user-checks",
                        //     headers: {
                        //         Authorization: `Bearer ${userState.userToken}`,
                        //     },
                        //     data: JSON.stringify({
                        //         userId: userState.userId,
                        //     }),
                        // });

                        const { data: res } = await axios.post(
                          "/api/user-checks",
                          {
                            userId: userState.userId,
                          },
                          {
                            headers: {
                                Authorization: `Bearer ${userState.userToken}`,
                            },
                          }
                        );
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
                }catch(err){
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