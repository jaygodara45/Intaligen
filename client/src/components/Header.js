import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from './ContextProvider/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"

const Header = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (data.status == 201) {
            console.log("use logout");
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            history("/");
        } else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/dash")
    }

    const goError = () => {
        history("*")
    }

    
    
    return (
  <>
    <header className="w-full h-20 bg-white shadow-md">
      <nav className="max-w-7xl h-full mx-auto flex justify-between items-center px-4">
        <NavLink to="/" className="text-xl font-bold text-gray-800">Intaligen</NavLink>
        <div className="avtar">
          {
            logindata.ValidUserOne ? 
              <Avatar 
                className="cursor-pointer"
                style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} 
                onClick={handleClick}
              >
                {logindata.ValidUserOne.fname[0].toUpperCase()}
              </Avatar> :
              <Avatar className="cursor-pointer" style={{ background: "blue" }} onClick={handleClick} />
          }
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            logindata.ValidUserOne ? (
              <>
                <MenuItem onClick={() => {
                  goDash()
                  handleClose()
                }}>Profile</MenuItem>
                <MenuItem onClick={() => {
                  logoutuser()
                  handleClose()
                }}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={() => {
                  goError()
                  handleClose()
                }}>Profile</MenuItem>
              </>
            )
          }
        </Menu>
      </nav>
    </header>
  </>
);
}

export default Header