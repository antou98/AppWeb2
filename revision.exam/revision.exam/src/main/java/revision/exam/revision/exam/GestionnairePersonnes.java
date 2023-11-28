package revision.exam.revision.exam;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class GestionnairePersonnes {
    public List<Personne> personnes;

    public GestionnairePersonnes(List<Personne> personnes) {
        this.personnes = personnes;
    }

    public void remplacerPersonne(String nom,Personne personne){
        Personne personne1 = this.personnes.stream().filter(p->p.nom!=nom).findFirst().orElse(null);
        if(personne1!=null){
            personne1.age = personne.age;
            personne1.nom = personne.nom;
        }
    }

    public boolean containsThisPersonne(String nom){
        boolean isContained = false;
        for (Personne p: personnes) {
            if (Objects.equals(p.nom, nom)){
                isContained = true;
            }
        }

        return  isContained;
    }

    public void setPersonnes(List<Personne> personnes) {
        this.personnes = personnes;
    }
}
