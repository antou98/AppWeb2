package A23.formatif9.A23.formatif9;

import java.util.List;

public class GestionnairePersonnes {
    public List<Personne> personnes;

    public GestionnairePersonnes(List<Personne> personnes) {
        this.personnes = personnes;
    }

    public void remplacerPersonne(int id,Personne personne){
        Personne personne1 = this.personnes.get(id);
        personne1.age = personne.age;
        personne1.nom = personne.nom;
    }

    public void setPersonnes(List<Personne> personnes) {
        this.personnes = personnes;
    }
}
