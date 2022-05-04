import "./Loading.scss";

export default function Loading({isLoading}){
    return isLoading && <div className="c-loading"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}