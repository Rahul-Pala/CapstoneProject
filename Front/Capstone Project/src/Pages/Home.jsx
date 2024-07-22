import ContainerComponent from "../Components/ContainerComponent";
import LoginTemplate from "../Components/LoginTemplate";
import LoginTemplatePhotos from "../Components/LoginTemplatePhotos";
import LoginForm from "../Components/LoginForm";


export default function Home() {
   
    return (
    <ContainerComponent>
          <LoginTemplate></LoginTemplate> <br></br>
          <LoginTemplatePhotos></LoginTemplatePhotos><br></br>
    </ContainerComponent>
      )
   }
   // try removing the onChange prop and typing in a field
  