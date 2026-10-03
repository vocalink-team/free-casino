(function(){
const steps=[
{title:'FREE CASINOへようこそ',text:'ここではすべてゲーム内コインで遊びます。まず基本の流れを確認しましょう。'},
{title:'まずは「仕事」でコインを増やそう',text:'コインが少なくなったら「💼 仕事」へ。ミニ作業をクリアするとゲーム内コインを獲得できます。'},
{title:'好きなゲームで遊ぼう',text:'スロット、ブラックジャック、KENO、マインズ、ルーレット、競馬から選べます。ベット額を確認してからプレイしてください。'},
{title:'銀行と送金も使えます',text:'銀行ではコインの預け入れなどができ、送金では他ユーザーへゲーム内コインを送れます。これで準備完了です。'}
];
let step=0,userId=null;
const el=()=>FC.$('tutorial'),title=()=>FC.$('tutorialTitle'),text=()=>FC.$('tutorialText'),label=()=>FC.$('tutorialStep');
function key(){return userId?'free-casino:tutorial:v1:'+userId:null}
function render(){title().textContent=steps[step].title;text().textContent=steps[step].text;label().textContent='WELCOME / '+(step+1)+' OF '+steps.length;document.querySelectorAll('.tutorial-dots i').forEach((d,i)=>d.classList.toggle('active',i===step));FC.$('tutorialNext').textContent=step===steps.length-1?'はじめる ✓':'次へ →'}
function finish(){const k=key();if(k)localStorage.setItem(k,'done');el().hidden=true}
FC.startTutorial=function(user){if(!user?.id)return;userId=user.id;const k=key();if(localStorage.getItem(k)==='done')return;step=0;render();el().hidden=false};
FC.$('tutorialNext').onclick=()=>{if(step<steps.length-1){step++;render()}else finish()};
FC.$('tutorialSkip').onclick=finish;
})();