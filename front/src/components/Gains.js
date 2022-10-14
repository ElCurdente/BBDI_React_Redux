import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { yams, brelan, petite_suite, grande_suite } from "../store/actions/actions-types";

import Card from "../Styles/Card";

function Gains() {
    const { launch, win_types, current } = useSelector((state) => state.yam);
    const { total } = useSelector((state) => state.gains);

    const dispatch = useDispatch();

    useEffect(() => {
        if (launch) {
            console.log(total);
        }
    }, [launch]);


    return (
        <>
            <Card>
                <h1>Gains</h1>
                <p>Yams : {current.yams}</p>
                <p>Brelan : {current.brelan}</p>
                <p>Petite suite : {current.petite_suite}</p>
                <p>Grande suite : {current.grande_suite}</p>
                <div>
                    <p>total : {total}</p>
                </div>
            </Card>
        </>
    );
}

export default Gains;