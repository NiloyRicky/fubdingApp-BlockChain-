
pragma solidity ^0.8.0;



//frontend mei ye detail wala page hoga
contract Campaign{
    string public title;
    uint public requiredAmount;//kitna paisa chaiye is campaign k liye
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;
    event donar(address indexed donor,uint indexed amount,uint timeStamp);

    //constructor
    constructor(string memory campaignTitle,string memory imageUrl,string memory storyUrl,uint campaignRequiredAmount) {
        title=campaignTitle;
        image=imageUrl;
        story=storyUrl;
        requiredAmount=campaignRequiredAmount;
        owner = payable(msg.sender);// this address receive etheres for its capmaign

     
      
    
    }
  //function to send eth
   function donate() payable public{
    require(receivedAmount<requiredAmount,"campaign goals already matched");//e.g requireAmount=20 ..so receive<require
         owner.transfer(msg.value);
         receivedAmount+=msg.value;
         emit donar(msg.sender,msg.value,block.timestamp);

   }
   

}

//Frontend:ye wala Home page hoga jisme saara campaigns honge
contract CampaignFactory{
    address[] public deployedCampaigns;
    event campaignCreated(
        string title,
        string imgurl,
        uint requiredAmount,
        address campaignAddress,//contract address of newly created created contract by factory
        address indexed owner,//frontend mei filter krne k liye indexed use hota ha
         uint indexed timeStamp,
         string indexed category
         

    );
function createCampaign(string memory campaigntitle,uint requiredCampaignAmount,string memory imgUrl,string memory storyUrl,string memory category) public{

Campaign newCampaign=new Campaign(campaigntitle,imgUrl,storyUrl,requiredCampaignAmount);//new instance of contract deploying..return type object parameter mei wo sb ha jo constructor mei ha Campaign contract kre
deployedCampaigns.push(address(newCampaign)); //here we use address because the the arr is of type address..address arr can push adress type only
emit campaignCreated(campaigntitle,imgUrl,
requiredCampaignAmount,
address(newCampaign),msg.sender,block.timestamp,category);
}
}