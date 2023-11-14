package a23.c6.semaine09.formatif7.a23.c6.semaine09.formatif7;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestService {
    @GetMapping(value = "/additionne/{num1}/{num2}")
    public String additionne(@PathVariable int num1, @PathVariable int num2){
        System.out.println((num1+num2));
        String valRet = (num1+num2)+"";
        return valRet;
    }
    @GetMapping(value = "/additionne1/{num1}/{num2}")
    public String additionne1(@PathVariable int num1, @PathVariable int num2){
        System.out.println((num1+num2));
        String valRet = (num1+num2+1)+"";
        return valRet;
    }


    @GetMapping(value = "/api")
    public int api(){
        System.out.println("test");
        return 0;
    }
}
