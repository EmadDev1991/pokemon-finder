import Link from "next/link"
import { Button } from "./ui/button"


interface PokemonListProps {
    pageNumber:  number
    limitNumber:  number 
  }

const PaginationButtons = ({pageNumber , limitNumber}:PokemonListProps ) => {
  return (
    <div className="flex justify-start items-center gap-6 mb-7">
        <Button disabled={pageNumber < 2}  asChild >
            <Link className={`${pageNumber <= 1 && "pointer-events-none opacity-50"}`}  href={`/?page=${pageNumber -1}`}>previous</Link>
        </Button>
        <Button  asChild >
            <Link href={`/?page=${pageNumber + 1}`}>Next</Link>
        </Button>
      </div>
  )
}

export default PaginationButtons