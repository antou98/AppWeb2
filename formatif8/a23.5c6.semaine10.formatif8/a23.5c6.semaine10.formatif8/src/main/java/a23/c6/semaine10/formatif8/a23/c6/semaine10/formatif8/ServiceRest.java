package a23.c6.semaine10.formatif8.a23.c6.semaine10.formatif8;

import a23.c6.semaine10.formatif8.a23.c6.semaine10.formatif8.Personne.GestionnairePersonnes;
import a23.c6.semaine10.formatif8.a23.c6.semaine10.formatif8.Personne.Personne;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ServiceRest {
    GestionnairePersonnes gestionnairePersonnes;

    public ServiceRest() {
        List<Personne> personnes = new ArrayList<>();
        personnes.add(new Personne(20,"tom"));
        personnes.add(new Personne(25,"gino"));
        personnes.add(new Personne(30,"mino"));
        this.gestionnairePersonnes = new GestionnairePersonnes(personnes);
    }

    @GetMapping(value = "/personne/{id}")
    public Personne getPersonne(@PathVariable int id){
        if ((gestionnairePersonnes.personnes.size()-1)>=id){
            return gestionnairePersonnes.personnes.get(id);
        }
        else {
            return new Personne(0,"pas une personne");
        }
    }

    @PostMapping(value = "/personne")
    public ResponseEntity<String> creerPersonne(@RequestBody Personne personne){
        gestionnairePersonnes.personnes.add(personne);
        return new ResponseEntity<>("Personne ajouté !! ", HttpStatus.CREATED);
    }

    @DeleteMapping(value="/personne/")
    public void removePersonne(@RequestBody int id){
        gestionnairePersonnes.personnes.remove(id);
        System.out.println("nombre de personne :"+ gestionnairePersonnes.personnes.size());

    }

    @PutMapping(value = "/personne/{id}")
    public ResponseEntity<String> remplacerPersonne(@PathVariable int id,@RequestBody Personne personne){
        gestionnairePersonnes.remplacerPersonne(id,personne);
        return  new ResponseEntity<>("Personne remplacé !!",HttpStatus.CREATED);
    }
}
