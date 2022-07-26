import React, { useState }  from 'react'
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
    const [email, setEmail]=useState("");
    return (
      <div className="newsLetter">
        <button>
          <span>NewsLetter</span>
        </button>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="">
            <input
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Entrer votre email ici"
            />
            <button>
              <SendIcon />
            </button>
          </label>
        </form>
      </div>
    );
}

export default NewsLetter;