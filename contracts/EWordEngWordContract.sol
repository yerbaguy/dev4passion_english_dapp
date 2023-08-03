// pragma solidity 0.8.4;
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract EWordEngWordContract is ERC20{

    event AddWord(address recipient, uint wordId);
    // event WhetherEWord(bool exists);
        event WhetherEWord(address sender, bool exists);

        bool exists = false;

    // struct EWord {
    //     uint id;
    //     string engword;
    //     //string plword;
    //     string engword_explained;
    //     string engword_pronounciation;

    // }

     struct EWord {
        uint id;
        string engword;
        //string plword;
        string engword_pronounciation;
        //string engword_explained;
        // string engword_explained_wrongly1;
        // string engword_explained_wrongly2;
        // string engword_explained_wrongly3;
        // string engword_explained_wrongly4;
        // string engword_explained_wrongly5;
        // string engword_explained_wrongly6;
        string engword_explained;
        //string engword_pronounciation;

      //  EWordWronglyExplained[][7] _ewords_wrongly_explained;

    }

     ////added
      struct EWordWronglyExplained {
        uint id_wrongly_explained;
        string engword_wrongly_explained;
    }
    ////

     EWord[] private ewords;
      //EWord[] ewords;

    // //added
    // EWordWronglyExplained[] private ewords_wrongly_explained;
    // //

    //added
     EWordWronglyExplained[][7] private ewords_wrongly_explained;
    //EWordWronglyExplained[] private ewords_wrongly_explained;
    //

    constructor() ERC20("","") {

       

        // EWordWronglyExplained[][7] storage _ewords_wrongly_explained = ewords_wrongly_explained;
        // EWordWronglyExplained memory eword_wrong = EWordWronglyExplained(0, "less than anything or anyone else; the smallest amount or number","special, or this and not any other");
        // _ewords_wrongly_explained.push(eword_wrong);



        // EWord[] memory temporary = new EWord[](ewords.length);

    }

    mapping(uint256 => address) wordToOwner;


    // function whetherEWordExists(string memory engword) external returns (bool) {
    //  function whetherEWordExists(string memory engword) public returns (bool) {
    // function whetherEWordExists(string memory engword) public view returns (bool) {



    // function whetherEWordExists(string memory engword) public view returns (uint) { 
      // function whetherEWordExists(string memory engword) public view returns (EWord[] memory) {   
      // function whetherEWordExists(string memory engword) public view returns (bool) {  // was it
    function whetherEWordExists(string memory engword) public returns (bool) { //// was here 
        ////function whetherEWordExists(string memory engword) public view returns (bool, EWord[] memory) {   


      EWord[] memory temporary = new EWord[](ewords.length);
      uint counter = 0;
     // bool exists = false;

      for (uint i = 0; i < ewords.length; i ++) {
     
         if ((keccak256(bytes(ewords[i].engword))) == (keccak256(bytes(engword)))) {
          temporary[counter] = ewords[i];
          exists = true;
          counter++;
         } else {
          exists = false;
         }

         //added
         return exists;
     
        // if (ewords[i].engword == keccak256(bytes(engword))) {
        //    exists  = true;
        // } else {
        //   exists = false;
        // }
      }



      EWord[] memory result = new EWord[](counter);

      for ( uint i=0; i< counter; i++) {
        result[i] = temporary[i];
      }

     // emit WhetherEWordExists(exists);
    
    
      return exists; // here
      // return  ( exists, result[i].engword );
    
    
     //// return counter;
   
     /////// return result; was here


     // return ( ewords.engword, ewords.engword_pronounciation, ewords.engword_explained);
    }

    //function whetherEWordExists(string memory engword) public returns (bool) { //// was here 
        ////function whetherEWordExists(string memory engword) public view returns (bool, EWord[] memory) { 
    function whetherEWordExists1(string memory engword) public view returns (EWord[] memory) {   


      EWord[] memory temporary = new EWord[](ewords.length);
      uint counter = 0;
     // bool exists = false;

      for (uint i = 0; i < ewords.length; i ++) {
     
         if ((keccak256(bytes(ewords[i].engword))) == (keccak256(bytes(engword)))) {
          temporary[counter] = ewords[i];
         // exists = true;
          counter++;
         } else {
         // exists = false;
         }

         //added
         // return exists;
     
        // if (ewords[i].engword == keccak256(bytes(engword))) {
        //    exists  = true;
        // } else {
        //   exists = false;
        // }
      }



      EWord[] memory result = new EWord[](counter);

      for ( uint i=0; i< counter; i++) {
        result[i] = temporary[i];
      }

     // emit WhetherEWordExists(exists);
    
    
     ////////// return exists; // here
      // return  ( exists, result[i].engword );
    
    
     //// return counter;
   
      return result; // was here


     // return ( ewords.engword, ewords.engword_pronounciation, ewords.engword_explained);
    }








    // function addEWord(string memory engword, string memory plword) external {
    function addEWord(string memory engword, 
                      string memory engword_pronounciation,
                      string memory engword_explained
                    //   //added
                    //   string memory engword_wrongly_explained
                    //   //
                      
                      ) external {
 
      uint wordId = ewords.length;
      uint whetherewordexists = 0;

      EWord[] memory temporary = new EWord[](ewords.length);


       // ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));


       // bool exists = false; //declared on top
       
         exists = whetherEWordExists(engword);  //here

         whetherEWordExists1(engword);
         // ( exists, ewords ) = whetherEWordExists(engword);
       
       // exists = false;

        console.log("exists", exists);
        emit WhetherEWord(msg.sender, exists);

        if (exists) {
         // require(!exists, "There is such a word");
            
            exists = true; //added

         return;

         //added
              
        // emit WhetherEWord(msg.sender, true);
        

        } else {

            exists = false; //added
            ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));
        }

       //temporary = whetherEWordExists(engword);
       
       //ewords.length = whetherEWordExists(engword);

      //  if (temporary > 0) {
         
      //  } else {

      //  }

        // if (whetherEWordExists(engword) != 0) {
        //                   //  ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));
        //                       ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));
          
        // } else {
        //   emit WhetherEWord(false);
        // }

        // uint wordId = ewords.length;

        // //added
        // uint wrongwordId = ewords_wrongly_explained.length;
        // //

        // ewords.push(EWord(wordId, engword, plword));


       
      //  if (whetherEWordExists(engword)) {


      //     
      // if (exists) {
      //     exists = true;
      //     emit WhetherEWord(exists);
      //  } else {
      //           ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));
      //  }
      // 
        
        // ewords.push(EWord(wordId, engword, engword_pronounciation, engword_explained));

        // //added
        // // ewords_wrongly_explained.push(EWordWronglyExplained(ewords_wrongly_explained, engword_wrongly_explained));
        // ewords_wrongly_explained.push(EWordWronglyExplained(id_wrongly_explained, engword_wrongly_explained));        
        // //

        wordToOwner[wordId] = msg.sender;

       // emit AddWord(msg.sender, wordId);
       emit WhetherEWord(msg.sender, exists);

    }
   

     function getListOfFiveWords(uint256 wordid) external view returns (EWord[] memory) {


      EWord[] memory temporary = new EWord[](ewords.length);
      uint counter = 0;
          // counter = wordid;
     // uint beginning_of_the_list = 0;
      uint end_of_the_list = 0;
         // end_of_the_list = beginning_of_the_list + 5;
            end_of_the_list +=wordid;

          //  for (uint i = wordid; i < end_of_the_list; i++) {
          //             temporary[counter] = ewords[i]; 
          //             counter++;          
          //  }
          for (uint i = wordid; i < 5; i++) {
                      temporary[counter] = ewords[i]; 
                      counter++;          
           }

          // return temporary;

         // return wordid;

           EWord[] memory result = new EWord[](counter);

           for (uint i = 0; i < counter; i++) {
             result[i] = temporary[i];
           }

          
           return result;
    }

    function getEWords1(uint256 wordid) external view returns(EWord[] memory) {

      EWord[] memory temporary = new EWord[](ewords.length);
      uint counter = 0;
     // uint wanted = 0;  
          // wanted+=wordid;
      uint wanted = wordid + 5;

      // for (uint i = wordid; i<=wanted; i++) {
      //      temporary[counter] = wanted[i];
      //      counter ++;
      // }

      // for (uint i = wordid; i<=ewords[i] + wanted; i++) {
      //     //  temporary[counter] = wanted[i];
      //     temporary[counter] = ewords[i] + wanted;
      //      counter ++;
      // }

      for (uint i = wordid; i< (ewords.length - ewords.length) + wanted; i++) {
          //  temporary[counter] = wanted[i];
          temporary[counter] = ewords[i];
           counter ++;
      }



      EWord[] memory result = new EWord[](counter);

      for (uint i = 0; i < counter; i ++) {
        result[i] = temporary[i];
      } 

      return result;
    }

    function getEWords() external view returns(EWord[] memory) {
        EWord[] memory temporary = new EWord[](ewords.length);
        uint counter = 0;

        for (uint i = 0; i < ewords.length; i++) {

             temporary[counter] = ewords[i];
             counter ++;
        }

        EWord[] memory result = new EWord[](counter);

        for (uint i = 0; i < counter; i++) {

           result[i] = temporary[i];
        }

        return result;
    }

    // function getEngWord(uint256 wordid) external view returns (string memory) {
    //         return ewords[wordid].engword;
    // }



    //  function getEngWordPlWord(uint256 wordid) external view returns (string memory, string memory) {
    //        // return ewords[wordid].engword;
    //         return (ewords[wordid].engword, ewords[wordid].plword);
    // }

      function getEngWordEngExplainedAndPronounciation(uint256 wordid) external view returns (string memory, string memory, string memory) {
           // return ewords[wordid].engword;
          //  return (ewords[wordid].engword, ewords[wordid].plword);
            // return (ewords[wordid].engword, ewords[wordid].engword_explained, ewords[wordid].engword_pronounciation);
                        return (ewords[wordid].engword, ewords[wordid].engword_pronounciation, ewords[wordid].engword_explained);

    }

     function getAddedEngWordEngExplainedAndPronounciation(uint256 wordid) external view returns (string memory, string memory, string memory) {
           // return ewords[wordid].engword;
          //  return (ewords[wordid].engword, ewords[wordid].plword);
              ////  uint256 wordid = ewords.length;

            // return (ewords[wordid].engword, ewords[wordid].engword_explained, ewords[wordid].engword_pronounciation);
            // return (ewords[wordid].engword, ewords[wordid].engword_explained, ewords[wordid].engword_pronounciation);
                        return (ewords[wordid].engword, ewords[wordid].engword_pronounciation, ewords[wordid].engword_explained);

    }

    // function whetherEWordExists(string memory engword) external view returns (bool) {
  
  
  
  
  // function whetherEWordExists(string memory engword) external returns (bool) {



  //     EWord[] memory temporary = new EWord[](ewords.length);
  //     uint counter = 0;
  //     bool exists = false;

  //     for (uint i = 0; i < ewords.length; i ++) {
     
  //        if ((keccak256(bytes(ewords[i].engword))) == (keccak256(bytes(engword)))) {
  //         exists = true;
  //        } else {
  //         exists = false;
  //        }
     
  //       // if (ewords[i].engword == keccak256(bytes(engword))) {
  //       //    exists  = true;
  //       // } else {
  //       //   exists = false;
  //       // }
  //     }

  //    // emit WhetherEWordExists(exists);
  //     return exists;

  //    // return ( ewords.engword, ewords.engword_pronounciation, ewords.engword_explained);
  //   }





    // function getPlWord(uint256 wordid) external view returns (string memory) {
    //     return  ewords[wordid].plword;
    // }
}