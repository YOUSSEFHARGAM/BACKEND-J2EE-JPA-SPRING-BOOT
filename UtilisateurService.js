import axios from 'axios'
const UTILISATEURS_REST_API ='http://localhost:8080/api/utilisateurById';


class UtilisateurService {
getUtilisateur(){
axios.get(UTILISATEURS_REST_API);

}
}
export default new UtilisateurService();