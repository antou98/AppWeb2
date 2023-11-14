package org.example;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

public class LectureFichierJSON {
    public static void main(String args[]) {
        String message = "Voici les arguments passé en paramètre : ";
        int index = 1;
        for (String arg : args) {
            message+= index+": "+arg+"  ";
            index++;
        }
        System.out.println(message);
        System.out.println();

        LectureFichierJSON lectureFichierJSON = new LectureFichierJSON();
        lectureFichierJSON.getPersonnes();
        lectureFichierJSON.getPersonnesById(1);
        lectureFichierJSON.createPersonne("Antoine",99);
        lectureFichierJSON.updatePersonne(0,"dickclub",55);
        //lectureFichierJSON.deletePersonne(1);
    }

    public void readJson(String jsonObj){
        JSONParser jsonP = new JSONParser();
        try {

            //ClassLoader classLoader = LectureFichierJSON.class.getClassLoader();
            //File file = new File(classLoader.getResource("person.json").getFile());

            JSONArray jsonA = (JSONArray)jsonP.parse(jsonObj);

            for (int i = 0;i<jsonA.size();i++) {
                JSONObject jsonO = (JSONObject)jsonP.parse(jsonA.get(i).toString());
                System.out.println(jsonO.get("nom")+" "+jsonO.get("age"));
            }

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public void getPersonnes(){
        HttpClient httpClient = HttpClient.newHttpClient();

        String apiUrl = "http://172.20.45.44:8080/A23.formatif.9-0.0.1-SNAPSHOT-plain/personnes";
        HttpRequest httpRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl)).GET().build();

        try{
            HttpResponse<String> httpResponse = httpClient.send(httpRequest,HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Code: " + httpResponse.statusCode());
            System.out.println("Response Body: " + httpResponse.body());
            readJson(httpResponse.body());
        }catch (Exception e){
            System.out.println(e.getMessage() +"  "+e.getStackTrace().toString());
        }
    }

    public void getPersonnesById(int id){
        HttpClient httpClient = HttpClient.newHttpClient();

        String apiUrl = "http://172.20.45.44:8080/A23.formatif.9-0.0.1-SNAPSHOT-plain/personne/"+id;
        HttpRequest httpRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl)).GET().build();

        try{
            HttpResponse<String> httpResponse = httpClient.send(httpRequest,HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Code: " + httpResponse.statusCode());
            System.out.println("Response Body: " + httpResponse.body());
            JSONParser jsonP = new JSONParser();
            try {
                JSONObject jsonO = (JSONObject)jsonP.parse(httpResponse.body());
                System.out.println(jsonO);
            }catch (Exception e){
                System.out.println(e.getMessage());
            }

        }catch (Exception e){
            System.out.println(e.getMessage() +"  "+e.getStackTrace().toString());
        }
    }

    public void createPersonne(String nom, int age){
        HttpClient httpClient = HttpClient.newHttpClient();

        String apiUrl = "http://172.20.45.44:8080/A23.formatif.9-0.0.1-SNAPSHOT-plain/personne";
        Map<String,String> jsonPersonne = new HashMap<>();
        jsonPersonne.put("nom",nom);
        jsonPersonne.put("age",String.valueOf(age));
        String json = JSONObject.toJSONString(jsonPersonne);

        HttpRequest httpRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl)).header("Content-Type","application/json").POST(HttpRequest.BodyPublishers.ofString(json)).build();

        try{
            HttpResponse<String> httpResponse = httpClient.send(httpRequest,HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Code: " + httpResponse.statusCode());
            System.out.println("Response Body: " + httpResponse.body());
            //readJson(httpResponse.body());
        }catch (Exception e){
            System.out.println(e.getMessage() +"  "+e.getStackTrace().toString());
        }
    }

    public void updatePersonne(int id,String nom, int age){
        HttpClient httpClient = HttpClient.newHttpClient();

        String apiUrl = "http://172.20.45.44:8080/A23.formatif.9-0.0.1-SNAPSHOT-plain/personne/"+id;
        Map<String,String> jsonPersonne = new HashMap<>();
        jsonPersonne.put("nom",nom);
        jsonPersonne.put("age",String.valueOf(age));

        String json = JSONObject.toJSONString(jsonPersonne);

        HttpRequest httpRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl)).header("Content-Type","application/json").PUT(HttpRequest.BodyPublishers.ofString(json)).build();

        try{
            HttpResponse<String> httpResponse = httpClient.send(httpRequest,HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Code: " + httpResponse.statusCode());

            System.out.println("Response Body: " + httpResponse.body());
            //readJson(httpResponse.body());
        }catch (Exception e){
            System.out.println(e.getMessage() +"  "+e.getStackTrace().toString());
        }
    }

    public void deletePersonne(int id){
        HttpClient httpClient = HttpClient.newHttpClient();

        String apiUrl = "http://localhost:8080/personne/"+id;
        /*Map<String,Integer> jsonPersonne = new HashMap<>();
        jsonPersonne.put("id",id);
        String json = JSONObject.toJSONString(jsonPersonne);*/

        HttpRequest httpRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl)).DELETE().build();

        try{
            HttpResponse<String> httpResponse = httpClient.send(httpRequest,HttpResponse.BodyHandlers.ofString());
            System.out.println("Response Code: " + httpResponse.statusCode());
            System.out.println("Response Body: " + httpResponse.body());
            System.out.println("Response Body: " + httpResponse.uri());
            //readJson(httpResponse.body());
        }catch (Exception e){
            System.out.println(e.getMessage() +"  "+e.getStackTrace().toString());
        }
    }



}
