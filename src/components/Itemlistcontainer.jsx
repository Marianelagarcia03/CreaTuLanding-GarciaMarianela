import salud from "../assets/salud.png"
export const Itemlistcontainer = (props) => (
    <>
        <div className="saludo">
        <h1>{props.saludo}</h1>
        <img src={salud} alt="" />
    </div>
    </>
)


