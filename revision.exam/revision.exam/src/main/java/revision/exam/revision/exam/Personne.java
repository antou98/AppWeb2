package revision.exam.revision.exam;

public class Personne implements Comparable<Personne>{

    public int age;

    public String nom;

    public Personne(int age, String nom) {
        this.age = age;
        this.nom = nom;
    }

    @Override
    public int compareTo(Personne o) {
        return this.compareTo(o);
    }
}
