import React, { useState } from 'react'

import {ethers} from "ethers"

// import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'
import EWordEngContract from '../artifacts/contracts/EWordEngWordContract.sol/EWordEngWordContract.json'
import { Label } from 'semantic-ui-react'
import '../components/Navbar.css';
import WordsExists from './WordExists';

import { useNavigate} from "react-router-dom";

// function AddWords() {
const AddWords = (props) => {

    const [engWord, setEngWord] = useState('')
    const [engWordExplained, setEngWordExplained] = useState('')
    const [engWordPronounciation, setEngWordPronounciation] = useState('')
    const [whetherTheWordExists, setWhetherTheWordExists] = useState('')

    const [plWord, setPlWord] = useState('')
    // const [engW, setEngW] = useState('')
    // const [plW, setplW] = useState('')

    // const [engW, setEngW] = useState([])
    const [engW, setEngW] = useState('')
    const [engWExplained, setEngWExplained] = useState('')
    const [plW, setplW] = useState([])

    const [englishWord, setEnglishWord] = useState('')
    const [englishWordPronounciation, setEnglishWordPronounciation] = useState('')
    const [englishWordExplained, setEnglishWordExplained] = useState('')
     const [whetherEWordExists2orNot, setwhetherEWordExists2orNot] = useState('')
     const [isdisabled, setIsDisabled] = useState(true)
    //let whetherEWordExists2orNot = ""
    

    const [engWToCheck, setEngWToCheck] = useState('')
    // const [engWToCheck, setEngWToCheck] = useState([])
    // const [data, setData] = useState('')
    //const [data, setData] = useState(1)
    const [data, setData] = useState([])

    const [ewordsCount, setEWordsCount] = useState(0)
    let ewordscount
    let datacount = 1

    const navigate = useNavigate();

    // const ewordEngContract = "0x9EBD79915dA3aCa29139e61Fa46d5fE604576729"
    // const ewordEngContract = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
    // 0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB
    // const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    
    // const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"
     const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"




     const whetherEWordExists2 = async (engword) => {

      let result_engw = "";

      const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
        console.log("whetherEWordExists2-provider", provider);
      const erc20 = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider);

        return erc20.whetherEWordExists1(engword).then((result) => {

            // console.log("whetherEWordExists2", result[1].engword);
           // console.log("whetherEWordExists2", result);
           console.log("whetherEWordExists2", result[0].engword);

            // let resultt = result[1].engword;
            // setWhetherTheWordExists(resultt);
            let resultt = result[0].engword;
            setWhetherTheWordExists(resultt);
            console.log("whetherTheWordExists", whetherTheWordExists)

           //
            // let resultt = result[1].engword;
            // setWhetherTheWordExists(result[1].engword);
            // result_engw = resultt;
           //

            // if (result[1].engword > 0) {
       
             ////was this
            //  if (resultt > 0) { 
            //   console.log("whetherEWordExists2-ok")
            //   setWhetherTheWordExists(resultt);
            //   navigate( '/wordexists', { engword: resultt });
            // } else {
            //   console.log("whetherEWordExists2-no")
            //   return;
            // }
            ////
        
        
            //setWhetherTheWordExists(transaction);

        }).catch('error', console.error);

       // return result_engw;
    }


    async function requestAccount() {
        // await window.ethereum.request({ method: "eth_requestAccounts" })
       const windw_eth =  await window.ethereum.request({ method: "eth_requestAccounts" })
       console.log("window_eth", windw_eth);
      }


      // if (whetherTheWordExists.length > 0) {
      //   // if (whetherEWordExists2(eword.engword).length > 0) {
      //    // navigate( '/wordexists', { engword: resultt });
      //    navigate( '/wordexists');
      //  } else {


   const handleCheckWhetherWordExistsSubmit = async (e) => {
          e.preventDefault();

          console.log(engWord)

          const eword = {
            engword: engWord,
            engword_explained: engWordExplained,
            engword_pronounciation: engWordPronounciation
        };

        console.log("check whether the word exists clicked");

        // whetherEWordExists2orNot = whetherEWordExists2(eword.engword);
        // console.log("whetherEWordExists2orNot", whetherEWordExists2orNot);

        whetherEWordExists2(eword.engword);

        if ( whetherTheWordExists.length > 0) {
          setIsDisabled(true);
          console.log("whetherTheWordExists", isdisabled);
        } else {
          setIsDisabled(false);
          console.log("whetherTheWordExists", isdisabled);
        }
  }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(engWord)
        console.log(engWordExplained)
        console.log(engWordPronounciation)
        // console.log(plWord)


     







        

        // const eword = {
        //     engword: engWord,
        //     plword: plWord
        // };

        const eword = {
          engword: engWord,
          engword_explained: engWordExplained,
          engword_pronounciation: engWordPronounciation
      };






        //  try {
        //     console.log("ipfs", eword.engword)
        //     console.log("ipfs", eword.plword)
        //     const added = await client.add(JSON.stringify(eword))
        //     console.log("addedd", added.path)
        //     console.log("addedd", added.path)
        //     console.log("ipfs", added.path);
        //   } catch (err) {
        //     console.log('error: ', err)
        //   }
        // }



          console.log("clicked");

          // whetherEWordExists2orNot = whetherEWordExists2(eword.engword);
          // console.log("whetherEWordExists2orNot", whetherEWordExists2orNot);

          whetherEWordExists2(eword.engword);
          // console.log("whetherTheWordExists", whetherTheWordExists);




    


        /////////


       // if (whetherTheWordExists.length != 0) {


        //  if (!typeof window.ethereum !== 'undefined')  {
          if (!typeof window.ethereum !== 'undefined') {
            // if ( whetherEWordExists != null) {
            {
        //  if (!typeof window.ethereum !== 'undefined' && whetherTheWordExists !== 'null') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
            // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
            const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

            // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
            // const transaction = await contract.createEWord(eword.engword, eword.plword) //
          
            // const transaction = await contract.addEWord(eword.engword, eword.plword)
       
       
              // let result = whetherEWordExists(eword.engword); 


              // checking whether the word exists
              // let wordexists = 0;
              // wordexists = whetherEWordExists(eword.engword);   
              // console.log("wordexists", wordexists);                
              ///


                ////////   console.log("result", result);     
          

              
                






               // whetherTheWordExists
                //whetherEWordExists2 
              ///////timely excluded      
             


               if (whetherTheWordExists.length > 0) {
               // if (whetherEWordExists2(eword.engword).length > 0) {
                // navigate( '/wordexists', { engword: resultt });
                navigate( '/wordexists');
              } else {
                const transaction = await contract.addEWord(eword.engword, eword.engword_explained, eword.engword_pronounciation)
              }



            

              // let result = transaction.WhetherEWord();
              // console.log("WhetherEWord", result);

              // transaction.onSubmit("WhetherEWord", event => {

              //   let showvalue = {
              //     eventdata: event,
              //   }
              //   console.log(JSON.stringify(showvalue, null, 4));
              // })

              // console.log("addWord", transaction.request.value);

              
               ////////////////
               //////////////console.log("addWord", transaction); // was here

                /////////////////
                // let result = whetherEWordExists(eword.engword);
                // console.log("whethrEWordExists", result[0]);
                /////////////////

 
 
                //// whetherEWordExists1(eword.engword);
                ////whetherEWordExists2(eword.engword); //// excluded

              // console.log("whetherTheWordExists----", whetherTheWordExists[0]);
     
               ///////////// 
              // console.log("whetherTheWordExists----", whetherTheWordExists);
              // console.log("whetherTheWordExists----length", whetherTheWordExists.length);
              ////////////// 
             
             
             // setWhetherTheWordExists("");


              

              


              //  if (whetherTheWordExists.length != 0) {
              //    console.log("if - lkasjd")
              //    elseif (whetherTheWordExists != 0) {}
              //    if (whetherTheWordExists.length != 0) {
              //     console.log("2lkajsdlfk");
              //    }
              //  } else if (whetherTheWordExists != 0) {
              //    console.log("els - werwerlkjlkj");

              //  }





              ///////////////////

              //  if (whetherTheWordExists.length != 0) {
              //        return;              
              //  } else if (whetherTheWordExists.length != 0) {
              //        return;
              //  } else {
              //      if ( whetherTheWordExists.length == 0) {
              //         console.log("1try")
              //         if (whetherTheWordExists.length == 0) {
              //           console.log("11try");
              //         }
              //      } else if (whetherTheWordExists.length == 0) {
              //         console.log("2nd try");
              //      } else {
              //         console.log("do");
              //         const transaction = await contract.addEWord(eword.engword, eword.engword_explained, eword.engword_pronounciation)

              //      } 
              //  }

              ///////////////

        
              ////console.log("transaction", transaction);

              ///////timely excluded
            /////// console.log("transaction", transaction.data);

            ////turned off to check the whetherEWordExists method
            //  fetchEWords();
            //  getAddedEngWord(1);
            //  getListOfEngWords(1);
            fetchEWords();
            getAddedEngWord(1);
            getListOfEngWords(1);


            // fetchEngWord();
        }

      
      // }
        // ///////////

      }

      // const whetherEWordExists2 = async (engword) => {

      //   const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
      //     console.log("whetherEWordExists2-provider", provider);
      // }

      async function whetherEWordExists1(engword) {
      

        console.log("whetherEWordExists1", engword);

        /////////
        if (!typeof window.ethereum !== 'undefined') {
           await requestAccount()
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           const signer = provider.getSigner()
           // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
           // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
           const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

           // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
           // const transaction = await contract.createEWord(eword.engword, eword.plword) //
           // const transaction = await contract.addEWord(eword.engword, eword.plword)
         ////  const wordid = 0;


        //////////   const wordid = data;
        
        
           // const transaction = await contract.getEngWord(wordid)
           // const transaction = await contract.getEngWord(wordid)
           // getEngWordEngExplainedAndPronounciation
           // const transaction = await contract.getEngWordPlWord(wordid)
          //  const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
          const transaction = await contract.whetherEWordExists1(engword);

       
           // console.log("transaction", transaction);
           // console.log("transaction", transaction.data);
          // setData(transaction)
           // console.log("transaction", transaction);
        
        //
        // console.log("transaction_whetherEWordExists", transaction[0]);
     
        ////// setWhetherTheWordExists("");
     
        // console.log("transaction_whetherEWordExists", transaction);
        console.log("transaction_whetherEWordExists1", transaction);
        if (transaction.length > 0) {
          // return <WordsExists />
          console.log("yes");
          // <Route path="/WordExists" component={WordsExists} />
          // navigate("WordExists");
          // navigate("WordExists", { engword: engword });
          navigate( '/wordexists', { engword: engword });
        } else {
          console.log("no");
        }


         let whethereword = transaction[0];
        //  console.log("whethereword", whethereword);
        console.log("whethereword", transaction[0]);
        //  setWhetherTheWordExists(whethereword);
       
       ///////// setWhetherTheWordExists(transaction);
        
         

        // setWhetherTheWordExists(transaction);
        // console.log("whetherTheWordExists", transaction);


        ///////   console.log("transaction_get_add_eng_word", transaction[0]);
        ///////   setEnglishWord(transaction[0]);
        ///////   setEngWord("")
        //
        
           // const engW = transaction[0];
          
           // sessionStorage.setItem('engw', transaction[0]);
          
            ///////////////// setEngW(transaction[0])
           ////////////////// console.log("engWlskdjfl", engW);

          //
          //  console.log("transaction_get_added_eng_word", transaction[1]);
          //  setEnglishWordPronounciation(transaction[1]);
          //  setEngWordPronounciation("")

          //  console.log("transaction_get_added_eng_word", transaction[2]);
          //  setEnglishWordExplained(transaction[2]);
          //  setEngWordExplained("")
          //


           ////// setEngWExplained(transaction[1])


           // sessionStorage.setItem('plw', transaction[1]);
           // // const plW = transaction[1];
           // setplW(transaction[1]);
           // console.log("plW", plW);

           // console.log("data", data);


           //
           ///////console.log("transaction", transaction[2]);


           return transaction;

        
        }

       
      }

        async function whetherEWordExists(engword) {

          
          console.log("whetherEWordExists", engword);

          /////////
          if (!typeof window.ethereum !== 'undefined') {
             await requestAccount()
             const provider = new ethers.providers.Web3Provider(window.ethereum)
             const signer = provider.getSigner()
             // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
             // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
             const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)
  
             // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
             // const transaction = await contract.createEWord(eword.engword, eword.plword) //
             // const transaction = await contract.addEWord(eword.engword, eword.plword)
           ////  const wordid = 0;


          //////////   const wordid = data;
          
          
             // const transaction = await contract.getEngWord(wordid)
             // const transaction = await contract.getEngWord(wordid)
             // getEngWordEngExplainedAndPronounciation
             // const transaction = await contract.getEngWordPlWord(wordid)
            //  const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
            const transaction = await contract.whetherEWordExists(engword);
  
         
             // console.log("transaction", transaction);
             // console.log("transaction", transaction.data);
            // setData(transaction)
             // console.log("transaction", transaction);
          
          //
          // console.log("transaction_whetherEWordExists", transaction[0]);
          setWhetherTheWordExists("");
          // console.log("transaction_whetherEWordExists", transaction);
          console.log("transaction_whetherEWordExists", transaction);

           let whethereword = transaction[0];
          //  console.log("whethereword", whethereword);
          console.log("whethereword", transaction[0]);
          //  setWhetherTheWordExists(whethereword);
          setWhetherTheWordExists(transaction);
          
           

          // setWhetherTheWordExists(transaction);
          // console.log("whetherTheWordExists", transaction);


          ///////   console.log("transaction_get_add_eng_word", transaction[0]);
          ///////   setEnglishWord(transaction[0]);
          ///////   setEngWord("")
          //
          
             // const engW = transaction[0];
            
             // sessionStorage.setItem('engw', transaction[0]);
            
              ///////////////// setEngW(transaction[0])
             ////////////////// console.log("engWlskdjfl", engW);
  
            //
            //  console.log("transaction_get_added_eng_word", transaction[1]);
            //  setEnglishWordPronounciation(transaction[1]);
            //  setEngWordPronounciation("")
  
            //  console.log("transaction_get_added_eng_word", transaction[2]);
            //  setEnglishWordExplained(transaction[2]);
            //  setEngWordExplained("")
            //
  
  
             ////// setEngWExplained(transaction[1])
  
  
             // sessionStorage.setItem('plw', transaction[1]);
             // // const plW = transaction[1];
             // setplW(transaction[1]);
             // console.log("plW", plW);
  
             // console.log("data", data);
  
  
             //
             ///////console.log("transaction", transaction[2]);
  
  
             return transaction;
  
          
          }


        }
      

        async function fetchEWords() {
          if (typeof window.ethereum !== 'undefined') {
              const provider = new ethers.providers.Web3Provider(window.ethereum)
              // const contract = new ethers.Contract(ewordAddress, Eword.abi, provider)
              // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, provider)
              const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider)
              try {
              //   const data = await contract.greet()
              // const data = await contract.fetchEWords() //
              const data = await contract.getEWords()
  
              
  
              const data_count = data.length;
              const fetchewords_data_count = data_count - 1;
              console.log("fetchewords_data_count", fetchewords_data_count);

              getAddedEngWord(fetchewords_data_count);
              getListOfEngWords(2);
  
                datacount = data_count;
  
                // setData(data);
                setData(data_count);
  
               // setGreetingValue(data)
  
                   
                    
                   
                  // console.log('data[0]: ', data[0])
                  console.log('data[0]: ', data_count)
                  // setEWordsCount(data)
                  setEWordsCount(data_count)
                  console.log('ewordsCount: ', datacount)
  
  
  
                  const datta = datacount;
                  console.log("data_data", datacount)
           
                 const min = Math.ceil(1);
                   // max = Math.floor(data.length);
                 const max = Math.floor(datta);
               
                   // return Math.floor(Math.random() * (max - min) + min);
                   const dataa =  Math.floor(Math.random() * (max - min) + min);
                   console.log("randommmmmm_int", dataa)
  
                    localStorage.setItem("datacount", JSON.stringify(dataa))
                   // localStorage.setItem("datacount", data)
                   const dataaccountls = localStorage.getItem("datacount");
                   console.log("dataacountls", dataaccountls);
  
  
  
                   ewordscount = dataa;
                   setEWordsCount(dataa)
                   console.log("ewordscount", ewordscount)
  
  
  
  
  
  
  
  
              // console.log('data: ', data[0][1]) - kind
  
  
              // console.log('data: ', data[0][1])
              // console.log('data: ', data[0][2])
              // console.log('data: ', data[1][1])
              // console.log('data: ', data[1][2])
  
  
             console.log('data: ', data[0][0].engWord)
              } catch (err) {
                console.log('Error: ', err)
              }
            }
      }

      // const getAddedEngWord = async(data) => {
        async function getAddedEngWord(fetchewords_data_count) {
      //  const getAddedEngWord = async() => {

          console.log("getAddedEngWord", fetchewords_data_count);

        /////////
        if (!typeof window.ethereum !== 'undefined') {
           await requestAccount()
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           const signer = provider.getSigner()
           // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
           // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
           const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

           // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
           // const transaction = await contract.createEWord(eword.engword, eword.plword) //
           // const transaction = await contract.addEWord(eword.engword, eword.plword)
         ////  const wordid = 0;
           const wordid = data;
           // const transaction = await contract.getEngWord(wordid)
           // const transaction = await contract.getEngWord(wordid)
           // getEngWordEngExplainedAndPronounciation
           // const transaction = await contract.getEngWordPlWord(wordid)
          //  const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
          const transaction = await contract.getAddedEngWordEngExplainedAndPronounciation(wordid);

       
           // console.log("transaction", transaction);
           // console.log("transaction", transaction.data);
          // setData(transaction)
           // console.log("transaction", transaction);
           console.log("transaction_get_add_eng_word", transaction[0]);
           setEnglishWord(transaction[0]);
           setEngWord("")
           // const engW = transaction[0];
          
           // sessionStorage.setItem('engw', transaction[0]);
          
            ///////////////// setEngW(transaction[0])
           ////////////////// console.log("engWlskdjfl", engW);

           console.log("transaction_get_added_eng_word", transaction[1]);
           setEnglishWordPronounciation(transaction[1]);
           setEngWordPronounciation("")

           console.log("transaction_get_added_eng_word", transaction[2]);
           setEnglishWordExplained(transaction[2]);
           setEngWordExplained("")


           ////// setEngWExplained(transaction[1])


           // sessionStorage.setItem('plw', transaction[1]);
           // // const plW = transaction[1];
           // setplW(transaction[1]);
           // console.log("plW", plW);

           // console.log("data", data);


           console.log("transaction", transaction[2]);


           return transaction;

          //// fetchEWords();


         //  fetchEngWord();
       }



     }



     async function getListOfEngWords(fetchewords_data_count) {
      //  const getAddedEngWord = async() => {

          console.log("getAddedEngWord", fetchewords_data_count);

        /////////
        if (!typeof window.ethereum !== 'undefined') {
           await requestAccount()
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           const signer = provider.getSigner()
           // const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
           // const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)
           const contract = new ethers.Contract(ewordEngContract, EWordEngContract.abi, signer)

           // const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
           // const transaction = await contract.createEWord(eword.engword, eword.plword) //
           // const transaction = await contract.addEWord(eword.engword, eword.plword)
         ////  const wordid = 0;
           //////const wordid = data;
           const wordid = 1;
           // const transaction = await contract.getEngWord(wordid)
           // const transaction = await contract.getEngWord(wordid)
           // getEngWordEngExplainedAndPronounciation
           // const transaction = await contract.getEngWordPlWord(wordid)
          //  const transaction = await contract.getEngWordEngExplainedAndPronounciation(wordid)
          
          // const transaction = await contract.getAddedEngWordEngExplainedAndPronounciation(wordid);
          const transaction = await contract.getListOfFiveWords(wordid);


       
           // console.log("transaction", transaction);
           // console.log("transaction", transaction.data);
          // setData(transaction)
           // console.log("transaction", transaction);
          
          
           ////// console.log("transaction_get_list_of_eng_words", transaction[0]); here
         
           ////setEnglishWord(transaction[0]);
           ////setEngWord("")
         
           // const engW = transaction[0];
          
           // sessionStorage.setItem('engw', transaction[0]);
          
            ///////////////// setEngW(transaction[0])
           ////////////////// console.log("engWlskdjfl", engW);

           console.log("transaction_get_list_of_eng_words", transaction[1]);
           ////setEnglishWordPronounciation(transaction[1]);
           ////setEngWordPronounciation("")

           ////console.log("transaction_get_added_eng_word", transaction[2]);
           ////setEnglishWordExplained(transaction[2]);
           ////setEngWordExplained("")


           ////// setEngWExplained(transaction[1])


           // sessionStorage.setItem('plw', transaction[1]);
           // // const plW = transaction[1];
           // setplW(transaction[1]);
           // console.log("plW", plW);

           // console.log("data", data);


           ////console.log("transaction", transaction[2]);


           return transaction;

          //// fetchEWords();


         //  fetchEngWord();
       }



     }
  





        // try {

        //     if (!typeof window.ethereum !== 'undefined') {
        //         await requestAccount()
        //         const provider = new ethers.providers.Web3Provider(window.ethereum)
        //         const signer = provider.getSigner()
        //         const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)
        //         const transaction = await contract.createEWord(eword.engword, eword.plword, "lkajsdlfkjasd")
            
        //         console.log("transaction", transaction);
        //     }
    
            
        // } catch (error) {
            
        // }


        // try {
            
        //     const { ethereum } = window

        //     if ( ethereum ) {
        //         const provider = new ethers.providers.Web3Provider(ethereum)
        //         const signer = provider.getSigner()
        //         const contract = new ethers.Contract(ewordAddress, Eword.abi, signer)

        //         const eword = await contract.createEWord(eword.engWord, eword.plWord)

        //         console.log("eword", eword);
    


        //     } else {

        //     }

        // } catch (error) {
            
        // }


        const { ethereum } = window;
    }



  return (
    <div className='addwordss'>
      lkajsdlkfajs

      {/* <form disabled={isdisabled} onSubmit={handleCheckWhetherWordExistsSubmit}> */}
      <form disabled={isdisabled} onSubmit={handleCheckWhetherWordExistsSubmit}>
                {plW}

                             {/* <input onChange = { (e) => handle(e)} id="engword" value = {eword.engword} placeholder='engword' type="text"/>
                <input onChange = { (e) => handle(e)} id="plword" value = {eword.plword} placeholder='plword' type="text" /> */}
         
         
         
                 {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='plword' type="text" />
                <input value = {plW} type="text" /> */}

                {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_explained' type="text" />
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_pronouciation' type="text" /> */}
                
                <label>
                <div className='addword-englishword'>
                  <input  onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='check-engword' style={{ width: "450px", height: "35px"}}type="text"/>
                </div>
                </label>
                <label>


                {/* <div className='addword-englishword-pronounciation'>
                  <input onChange = { (e) => setEngWordPronounciation(e.target.value)} id="engword_pronounciation" value = {engWordPronounciation} placeholder='engword_pronouciation' style={{ width: "450px", height: "40px"}}type="text" />
                </div>
                </label>
                <label>
                 <div className='addword-englishword-explained'>
                  <input onChange = { (e) => setEngWordExplained(e.target.value)} id="engword_explaned" value = {engWordExplained} placeholder='engword_explained' style={{ width: "450px", height: "70px"}} type="text" />                   
                  </div> */}

                </label>
                {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/> */}
                {/* <input onChange = { (e) => setEngWordExplained(e.target.value)} id="engword_explaned" value = {engWordExplained} placeholder='engword_explained' type="text" /> */}
                {/* <input onChange = { (e) => setEngWordPronounciation(e.target.value)} id="engword_pronounciation" value = {engWordPronounciation} placeholder='engword_pronouciation' type="text" /> */}


                <input value = {plW} type="text" />


                {/* <button onClick={submitEWord()}>Submit</button> */}
                {/* <button onClick={submitEWord}>Submit</button> */}

                <label>
                 <div className='addword-englishword-submit'>
                {/* <button>Submit</button> */}
                <button>Check Whether The Word Exists</button>
                 </div>
                </label>

                {plW}

                {englishWord}
                {englishWordPronounciation}
                {englishWordExplained}



            </form>













      <form disabled={isdisabled} onSubmit={handleSubmit}>
                {plW}

                             {/* <input onChange = { (e) => handle(e)} id="engword" value = {eword.engword} placeholder='engword' type="text"/>
                <input onChange = { (e) => handle(e)} id="plword" value = {eword.plword} placeholder='plword' type="text" /> */}
         
         
         
                 {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='plword' type="text" />
                <input value = {plW} type="text" /> */}

                {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/>
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_explained' type="text" />
                <input onChange = { (e) => setPlWord(e.target.value)} id="plword" value = {plWord} placeholder='engword_pronouciation' type="text" /> */}
                
                <label>
                <div className='addword-englishword'>
                  <input disabled={isdisabled} onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' style={{ width: "450px", height: "35px"}}type="text"/>
                </div>
                </label>
                <label>
                <div className='addword-englishword-pronounciation'>
                  <input disabled={isdisabled} onChange = { (e) => setEngWordPronounciation(e.target.value)} id="engword_pronounciation" value = {engWordPronounciation} placeholder='engword_pronouciation' style={{ width: "450px", height: "40px"}}type="text" />
                </div>
                </label>
                <label>
                 <div className='addword-englishword-explained'>
                  <input disabled={isdisabled} onChange = { (e) => setEngWordExplained(e.target.value)} id="engword_explaned" value = {engWordExplained} placeholder='engword_explained' style={{ width: "450px", height: "70px"}} type="text" />                   
                  </div>
                </label>
                {/* <input onChange = { (e) => setEngWord(e.target.value)} id="engword" value = {engWord} placeholder='engword' type="text"/> */}
                {/* <input onChange = { (e) => setEngWordExplained(e.target.value)} id="engword_explaned" value = {engWordExplained} placeholder='engword_explained' type="text" /> */}
                {/* <input onChange = { (e) => setEngWordPronounciation(e.target.value)} id="engword_pronounciation" value = {engWordPronounciation} placeholder='engword_pronouciation' type="text" /> */}


                <input value = {plW} type="text" />


                {/* <button onClick={submitEWord()}>Submit</button> */}
                {/* <button onClick={submitEWord}>Submit</button> */}

                <label>
                 <div className='addword-englishword-submit'>
                <button disabled={isdisabled}>Submit</button>
                 </div>
                </label>

                {plW}

                {englishWord}
                {englishWordPronounciation}
                {englishWordExplained}



            </form>





          



    </div>








     
  )
}

export default AddWords
