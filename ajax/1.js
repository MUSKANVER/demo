async function callbackend()
{
    const val=document.querySelector("#parent1").value;
    const url=`https://jsonplaceholder.typicode.com/posts?_limit=${val}`;

    const res= await fetch(url);
    const list=await res.json();

    const parent=document.querySelector("#parent");

    for(let items of list)
    {
        const prev=parent.innerHTML;

        const newchild =`<p> ${items.title} </p>`;

        parent.innerHTML=newchild + prev;

    }
}