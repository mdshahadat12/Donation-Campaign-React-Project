import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useLoadData from "../Hooks/useLoadData";


const CardDatails = () => {
    const data1 = useLoaderData()
    // const data1 = useLoadData()
    const {id} = useParams() 
    const [cardData, setCardData] = useState([])
    // const [apiData, setApiData] = useState([])

    useEffect(()=>{
        
        // fetch('./apiData.json')
        // .then(res => res.json())
        // .then(data => console.log(data))
        {
            const cardData1 = data1 && data1?.find(card => card.id == id)
            setCardData(cardData1);
        }

    },[data1,id])

    const handleClick = () => {
        let addedLocal = []
        const haveData = JSON.parse(localStorage.getItem('card'))
        if(!haveData){
            addedLocal.push(cardData)
            localStorage.setItem('card', JSON.stringify(addedLocal))
            toast.success('Donation Succesfull!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
        }else{
            const exist = haveData.find(card => card.id == cardData.id)
            if(!exist){
            addedLocal.push(...haveData, cardData)
            localStorage.setItem('card', JSON.stringify(addedLocal))
            toast.success('Donation Succesfull!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
            }else{
                toast.warn('Dont', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                    });
            }
        }
    }

    const {price, description, text_button_bg_color, title, picture} = cardData || {}
    // console.log(cardData);
    return (
        <div>
            <div className="relative">
                <img className="w-full rounded-xl" src={picture} alt="" />
                <div className="bg-[#24222277] py-4 rounded-b-xl absolute w-full bottom-0">
                    <button onClick={handleClick} style={{backgroundColor:`${text_button_bg_color}`}} className={`text-white font-medium px-5 py-3 ml-5 rounded-md`}>Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold my-8">{title}</h1>
            <p className="text-justify text-[#4b4949] mb-7">{description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CardDatails;