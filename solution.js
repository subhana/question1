const customPrint = ((n, message) => {
	if(n<=0) return;

   console.log(message);

   customPrint(n-1, message);
})
