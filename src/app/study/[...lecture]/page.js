'use client'

export default function(params){
    console.log(params)
    return(
        <div>
            <h1>
                Days of College:- {params?.lecture &&
                params?.lecture[0]}
            </h1>
            <h2>Lecture number:- {params?.lecture && params?.lecture[1]}</h2>
        </div>
    )
}