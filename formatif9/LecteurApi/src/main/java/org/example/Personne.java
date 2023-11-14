package org.example;

public class Personne {

    public int age;

    public String nom;

    public Personne(int age, String nom) {
        this.age = age;
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Personne{" +
                "age=" + age +
                ", nom='" + nom + '\'' +
                '}';
    }
}
