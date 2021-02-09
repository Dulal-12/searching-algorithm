const binary = (arr , value) =>{

    let left = 0 ;
    let right = arr.length - 1 ; 

    while(left <= right){

        let middle = Math.floor((left + right) / 2) ;

        if(value === arr[middle]){
            return middle;
        }

        else if (arr[middle]  < value){
            left  = middle + 1 ; 
        }
        else{
            right = middle - 1 ;
        }
    }

    return -1;

}

console.log(binary([3,4,5,6] , -8))