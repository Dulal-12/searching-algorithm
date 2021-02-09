const linear = (arr , value) =>{

   //fined array length
   const len = arr.length;

   //find the value index
   for(let i = 0 ; i < len ; i++){
       if(arr[i] == value){
           return i
       }
   }

   return -1;
}

const result = linear([12,34,56,7] , 56);
console.log(result);