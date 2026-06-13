export default function MyProps (Props) {
    return (
        <div>
                  <p>  Name :{Props.name} </p>
                   <p>Age : {Props.age}</p> 
                   <p>Student : {Props.isStudent ? "yes" : "No"}</p>
                   <p>Teenager : {Props.isTeenager ? "am 18 and abaove": "No am a toddler"}</p>
        </div>
        
    );
}