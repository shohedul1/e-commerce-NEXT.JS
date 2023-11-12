type Props ={
   amount: number;
   className?: string;
}
const FormattedPrice = ({amount}:Props) => {
    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits:1
    })
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormattedPrice;