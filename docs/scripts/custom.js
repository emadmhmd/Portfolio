// $(function() {
//     'use strict';
   

//     /*$('.nav #homeBtn').click(function(){
//         $('#home').show(1500);
//     	$('#home').siblings().hide(1000);
//     });  */

//     $('.nav #resumeBtn').click(function(){
//         $('#resume').show(1500);
//     	$('#resume').siblings().hide(1000);
//     }); 

//     $('.nav #projectsBtn').click(function(){
//         $('#projects').show(1500);
//         $('#projects').siblings().hide(1000);
//     }); 

//     $('.header .intro .follow').click(function(){
//         $('.contact').addClass('flash');
//     }); 



// });
(function() {
    'use strict';
    document.getElementById("homeBtn").onclick=async function(){
        // document.getElementById("home").classList.remove('hidden');
        // document.getElementById("resume").classList.add('hidden')
        // document.getElementById("projects").classList.add('hidden')
        await  setTimeout(()=>document.getElementById("home").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("resume").classList.add('hidden')
         document.getElementById("projects").classList.add('hidden')
        },500)

    }
    document.getElementById("resumeBtn").onclick=async function(){
        // document.getElementById("resume").classList.remove('hidden');
        // document.getElementById("home").classList.add('hidden')
        // document.getElementById("projects").classList.add('hidden')

        await  setTimeout(()=>document.getElementById("resume").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("home").classList.add('hidden')
         document.getElementById("projects").classList.add('hidden')
        },500)

    }
    document.getElementById("projectsBtn").onclick=async function(){
        // document.getElementById("projects").classList.remove('hidden');
        // document.getElementById("resume").classList.add('hidden')
        // document.getElementById("home").classList.add('hidden')

        await  setTimeout(()=>document.getElementById("projects").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("resume").classList.add('hidden')
         document.getElementById("home").classList.add('hidden')
        },500)

    }
  })()
window.onload=function(){
    
}
