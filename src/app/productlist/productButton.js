'use client'

export default function ProductButton({discountPercentage}) {
  return (
    <div>
      <button onClick={()=>alert(discountPercentage)} >Check more details</button>
    </div>
  )
};

