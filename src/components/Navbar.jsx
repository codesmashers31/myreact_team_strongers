import { Link } from "react-router-dom";

const Navbar = () => {

    return <>

        <div className="bg-black flex justify-between items-center p-3">

            <div className="">
                <img src="./logo/logo.png" alt="" className="w-50" />
            </div>
            <div className="text-white flex gap-5 pr-8">
                <Link to="/usestate">Use State Part 1</Link>
                <Link to="/tarneroy_op">TrO Use State 2</Link>
                <Link to="/part3">Use State Part 3</Link>
            </div>
        </div>
    </>


}


export default Navbar;