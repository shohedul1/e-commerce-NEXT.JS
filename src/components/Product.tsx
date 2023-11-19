'use client';

import Link from "next/link";
import { ProductType } from "../../type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from 'react-redux'
import { addToCart } from "@/redux/proSlice";
import toast,{Toaster} from "react-hot-toast";

interface Item {
    products: ProductType[];
}

const Product = ({ products }: Item) => {
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {products.map((item) => (
                    <div key={item?._id} className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-800 duration-300 hover:shadow-xl overflow-hidden">
                        <Link href={{pathname:`/${item?._id}`,query:{_id:item?._id}}}>
                            <Image 
                            src={item?.image} 
                            alt="Product image" 
                            width={500} 
                            height={500}
                            className="w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300"/>
                        </Link>
                        <Heart fill="black" className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"/>
                         <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
                            <p className="group-hover:text-desingColor duration-300">{item?.title}</p>
                            <p className="font-semibold"><FormattedPrice amount={item?.price}/></p>
                            <div className="flex items-center justify-between text-sm mt-2">
                                <button 
                                onClick={() =>{dispatch(addToCart(item)),toast.success(`${item?.title} is add to Cart!`)}}
                                className="uppercase font-semibold hover:text-desingColor duration-300">Add to cart</button>
                                <Link href={{pathname:`/${item?._id}`,query:{_id:item?._id}}} className="uppercase font-semibold hover:text-desingColor duration-300">More Info</Link>
                            </div>
                         </div>
                    </div>
                ))}
                <Toaster position="bottom-right"
                toastOptions={{
                    style:{
                        background:"#000",
                        color:"#fff",
                    }
                }}/>
      </div>
    )
}

export default Product;