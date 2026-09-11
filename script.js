//your JS code here. If required.
const tbody=document.getElementById('output');
const Promise1=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(2);
	},2000)
})
const Promise2=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(3);
	},3000)
})
const Promise3=new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(1);
	},1000)
})
Promise.all([Promise1,Promise2,Promise3]).then(resolvedData=>{
	 tbody.innerHTML = "";
	resolvedData.forEach((data,index)=>{
		tbody.innerHTML+=`<tr>
		                  <td>Promise ${index+1}</td>
		                  <td>${data}</td>
						  </tr>`
	})
	const total = Math.max(...resolvedData);
        tbody.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${total.toFixed(3)}</td>
            </tr>
        `;
})