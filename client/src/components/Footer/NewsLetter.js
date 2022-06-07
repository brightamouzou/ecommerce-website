import React, { useState }  from 'react'
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
    const [email, setEmail]=useState("");
    return (
      <div className="newsLetter">
        <button>
          <span>NewsLetter</span>
        </button>
        <form>
          <label htmlFor="">
            <input
              type="text"
              value={email}
              placeholder="type your email here"
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