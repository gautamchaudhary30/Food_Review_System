package dev.tariq.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/foods")
public class FoodController {

    @Autowired
    private FoodService foodService;
    @GetMapping
    public ResponseEntity<List<Food>> getAllFood(){
        return new ResponseEntity<List<Food>>(foodService.allFood(),HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Food>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Food>>(foodService.singleFood(imdbId), HttpStatus.OK);
    }
}
