'use client'

import { decrement, increment, selectCount } from "@/app/redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"


function Contador() {

    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCount)

    return (
        <div>
            <div className="flex gap-4 p-5 ">
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{counter.value}</span>
                {
                    counter.products &&
                    <ul>
                        {counter.products.map(product => (
                            <div key={product.userId}>
                                <p>{product.title}</p>
                                <p>{product.body}</p>
                            </div>
                        ))}
                    </ul>
                }
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Contador