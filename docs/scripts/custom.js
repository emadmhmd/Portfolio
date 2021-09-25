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
    document.getElementById("homeBtn").onclick=()=>showHome()
    document.getElementById("resumeBtn").onclick=()=>showSkills()
    document.getElementById("projectsBtn").onclick=()=>showProjects()
    document.getElementById("menuHomeBtn").onclick=()=>showHome()
    document.getElementById("menuResumeBtn").onclick=()=>showSkills()
    document.getElementById("menuProjectsBtn").onclick=()=>showProjects()
    async function showHome(){
        await  setTimeout(()=>document.getElementById("home").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("resume").classList.add('hidden')
         document.getElementById("projects").classList.add('hidden')
        },500)
    }
    async function showSkills(){
        await  setTimeout(()=>document.getElementById("resume").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("home").classList.add('hidden')
         document.getElementById("projects").classList.add('hidden')
        },500)
    }
    async function showProjects(){
        await  setTimeout(()=>document.getElementById("projects").classList.remove('hidden'),500)
        setTimeout(()=>{
         document.getElementById("resume").classList.add('hidden')
         document.getElementById("home").classList.add('hidden')
        },500)
    }

    document.getElementById("menuIcon").onclick=async function(){
         //document.getElementById("normalNav").classList.toggle('hidden')
         document.getElementById("menu").classList.toggle('hidden')

    }

  })()
window.onload=function(){
    
}
