const readline=require('readline-sync');
let a=readline.questionInt("Enter the size of the array=");
let arr=[];
let brr=[];
let c=1;
for(let i=0;i<a;i++)
{
 arr.push(readline.questionInt("Enter the element for the index"+" "+i+"="));
}
for(let i=0;i<arr.length;i++)
{
 brr[i]=0;
}
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]!=0)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]!=0)
            {
              if(arr[i]==arr[j])
              {
                arr[j]=0;
                brr[i]+=1;
              }
            }
        }
    }
}
console.log("The duplicates are=");
for(let i=0;i<arr.length;i++)
{
 if(brr[i]!=0)
 {
    console.log(arr[i])
 }
}

