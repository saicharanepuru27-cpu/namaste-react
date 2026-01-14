import { RestoImage } from "../utils/constant";

const Card =(props) =>{
    const {resdata} = props
    const {name,cuisines,avgRating,cloudinaryImageId}=resdata.info
    return(
        <div className="card">
           <img className="logo" src={RestoImage+ cloudinaryImageId}></img>
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h5>{avgRating}</h5>
        </div>
    )
}
export default Card