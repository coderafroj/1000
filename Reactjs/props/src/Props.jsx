function Props({name="innu",year="2025",img}){
  return(
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src={img}/>
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">{name}</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>{year}</span>
    </span>
  </div>
</div>)
}
export default Props