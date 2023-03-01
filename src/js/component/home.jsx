import React,{useState,useEffect} from "react";


//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("yellow");
	return (
		<div className="traffic-light">
			<div onClick={() => setSelectedColor("red")} className={"light red"+((selectedColor ==="red") ? " selected":"")}></div>
			<div onClick={() => setSelectedColor("yellow")} className={"light yellow"+((selectedColor ==="yellow") ? " selected":"")}></div>
			<div onClick={() => setSelectedColor("green")} className={"light green"+((selectedColor ==="green") ? " selected":"")}></div>
		</div>
	);
};

export default Home;
