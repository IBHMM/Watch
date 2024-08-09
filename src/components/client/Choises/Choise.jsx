import { useGetChoiseQuery } from "../../../redux/api/apichoise"


export function Choise() {

    const {data, isLoading, isError} = useGetChoiseQuery();

    console.log(data, isLoading, isError);

    return (
        <>
        </>
    )   
}