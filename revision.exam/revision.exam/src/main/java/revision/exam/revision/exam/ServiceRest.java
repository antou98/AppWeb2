package revision.exam.revision.exam;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.DeleteExchange;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
public class ServiceRest {

    public GestionnairePersonnes gestionnairePersonnes;

    public ServiceRest() {
        List<Personne> personnes = new ArrayList<>();
        personnes.add(new Personne(20,"tom"));
        personnes.add(new Personne(25,"gino"));
        personnes.add(new Personne(30,"mino"));
        this.gestionnairePersonnes = new GestionnairePersonnes(personnes);
    }

    @GetMapping(value = "/personne")
    public ResponseEntity<List<Personne>> getAllPersonne(){
        return new ResponseEntity<>(gestionnairePersonnes.personnes,HttpStatus.OK);
    }

    //get : url exemple : http://localhost:8080/personne/tom
    @GetMapping(value = "/personne/{nom}")
    public ResponseEntity<Personne> getPersonneByName(@PathVariable String nom  ){
        Personne personneRecherche = gestionnairePersonnes.personnes.stream().filter(p-> Objects.equals(p.nom, nom)).findFirst().orElse(null);
        if (personneRecherche!=null){
            return new ResponseEntity<>(personneRecherche, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    //post : http://localhost:8080/personne
    // body
    // {
    //    "age": 20,
    //    "nom": "tom"
    //}
    @PostMapping(value = "/personne")
    public ResponseEntity<String> createPersonne(@RequestBody Personne personne){
        Personne personneExist = gestionnairePersonnes.personnes.stream().filter(p -> Objects.equals(p.nom, personne.nom)).findFirst().orElse(null);
        if (personneExist!=null){
            return new ResponseEntity<>("Invalide personne (existe déjà)",HttpStatus.NOT_ACCEPTABLE);
        }else if(Objects.equals(personne.nom, "") || personne.age<=0){
            return new ResponseEntity<>("Invalide personne (données pas bonnes)",HttpStatus.NOT_ACCEPTABLE);
        }
        else {
            gestionnairePersonnes.personnes.add(personne);
            return new ResponseEntity<>(personne.nom+" créé",HttpStatus.CREATED);
        }
    }

    //delete : url exemple : http://localhost:8080/personne/tom
    @DeleteMapping(value = "/personne/{nom}")
    public ResponseEntity<String> removePersonne(@PathVariable String nom){

        Personne personne = gestionnairePersonnes.personnes.stream().filter(p->p.nom!=nom).findFirst().orElse(null);

        gestionnairePersonnes.personnes.remove(personne);
        if(personne!=null){
            return  new ResponseEntity<>(nom+" éffacé",HttpStatus.ACCEPTED);
        }else {
            return  new ResponseEntity<>(nom+" pas effacé",HttpStatus.NOT_ACCEPTABLE);
        }
    }

    //put : url exemple : http://localhost:8080/personne/tom
    // body
    // {
    //    "age": 20,
    //    "nom": "tom"
    //}
    @PutMapping(value = "/personne/{noms}")
    public ResponseEntity<String> remplacerPersonne(@PathVariable String noms,@RequestBody Personne personne){

        System.out.println(noms);
        System.out.println(personne);
        if(gestionnairePersonnes.containsThisPersonne(noms)){
            gestionnairePersonnes.remplacerPersonne(noms, personne);
            return  new ResponseEntity<>("Personne remplacé",HttpStatus.OK);

        }else {
            return  new ResponseEntity<>("Personne pas la",HttpStatus.NOT_MODIFIED);
        }

    }
}
