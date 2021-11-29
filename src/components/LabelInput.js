import React from "react";
import "../App";

function LabelInput ({labelName, htmlFor, className, type, id, value, ...register}) {

    return (
        <>
            <label htmlFor={htmlFor} className={className}>
                {labelName}
                <input
                    type={type}
                    id={id}
                    value={value}
                    register={...register}
                />
            </label>
        </>
    );
}

export default LabelInput;
