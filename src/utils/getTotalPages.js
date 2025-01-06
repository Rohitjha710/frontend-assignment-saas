export const getTotalPages = (data,dataPerPage) =>{
    const totalPages= Math.ceil(data.length/dataPerPage) || 0;
    return (Array.from({length:totalPages}).map((_,index)=>index+1));
}