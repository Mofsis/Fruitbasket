import React from 'react';
import {useForm} from 'react-hook-form'
import './App.css';

import FruitCounter from './components/FruitCounter';
import LabelInput from "./components/LabelInput";

import strawberry from './assets/strawberry.png'
import banana from './assets/banana.png'
import appel from './assets/appel.jpg'
import kiwi from './assets/kiwi.png'

function App() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data);
        console.log({Aardbeien: strawberryCounter, Bananen: bananaCounter, Appels: appelCounter, Kiwis: kiwiCounter});
    }

    const [strawberryCounter, setStrawberryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appelCounter, setAppelCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

   function resetButton() {
       setStrawberryCounter(0);
       setBananaCounter(0);
       setAppelCounter(0);
       setKiwiCounter(0);
       }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <div className="fruit">
            <FruitCounter
            fruitName="Aardbeien"
            image={strawberry}
            fruit={strawberryCounter}
            setFruit={setStrawberryCounter}
            />
        </div>
        <div className="fruit">
            <FruitCounter
                fruitName="Bananen"
                image={banana}
                fruit={bananaCounter}
                setFruit={setBananaCounter}
            />
        </div>
        <div className="fruit">
            <FruitCounter
                fruitName="Appels"
                image={appel}
                fruit={appelCounter}
                setFruit={setAppelCounter}
            />
        </div>
        <div className="fruit">
            <FruitCounter
                fruitName="Kiwi's"
                image={kiwi}
                fruit={kiwiCounter}
                setFruit={setKiwiCounter}
            />
        </div>
        <button className="reset" onClick={resetButton}>Reset</button>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>
                    <label htmlFor="first-name" className="first-name">
                    Voornaam
                    <input
                        type="text"
                        id="first-name"
                        {...register("first-name")}
                    />
                </label>

                <LabelInput
                htmlFor="first-name"
                className="first-name"
                labelName="Voornaam"
                type="text"
                id="first-name"
                value="firstname"
                register="first-name"
                />


                <label htmlFor="last-name" className="last-name">
                    Achternaam
                    <input
                        type="text"
                        id="last-name"
                        {...register("last-name")}
                    />
                </label>

                <label htmlFor="age" className="age">
                    Leeftijd
                    <input
                        type="number"
                        id="age"
                        {...register("age")}
                    />
                </label>

                <label htmlFor="zipcode" className="zipcode">
                    Postcode
                    <input
                        type="text"
                        id="zipcode"
                        {...register("zipcode")}
                    />
                </label>

                <label htmlFor="dropdown" className="dropdown">
                    Bezorgfrequentie
                    <select className="select" id="select-box" {...register("select-box")}>
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>
                    </select>
                </label>

                <label htmlFor="radio" className="radio">
                    <input
                        id="radio"
                        type="radio"
                        value="Overdag"
                        {...register("radio")}
                    />
                    Overdag
                    <input
                        id="radio"
                        type="radio"
                        value="'s Avonds"
                        {...register("radio")}
                    />
                    's Avonds
                </label>

                <label htmlFor="comments" className="comment-field">
                    Opmerking
                    <textarea
                        id="comments"
                        rows="5"
                        cols="40"
                        {...register("comments")}
                    >
                    </textarea>
                </label>

                <label htmlFor="conditions" className="conditions">
                    <input
                        type="checkbox"
                        {...register("conditions")}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button type="submit" className="submit">
                    Verzend
                </button>
           </fieldset>
        </form>
    </>
  );
}

export default App;


