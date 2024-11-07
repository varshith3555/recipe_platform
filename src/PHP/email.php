<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$email = $_POST['userEmail'] ?? '';
$imgid = $_POST['imageId'] ?? '';
$name = $_POST['name'] ?? '';  

if (empty($email) || empty($imgid) || empty($name)) {
    echo "Email, Image ID, or Name is missing!";
    exit();
}

$to = $email;
$sub = "Recipe";
$ingredients = '';
$process = '';
$firstline = '';
if($imgid == 'one'){
    $firstline = "Here's a delicious cheesecake recipe for you!";
    $ingredients = "
    For the crust:
    1) 1 ½ cups graham cracker crumbs
    2) ¼ cup sugar
    3) ½ cup unsalted butter, melted

    For the filling:
    1) 4 (8 oz) packages cream cheese, softened
    2) 1 ¼ cups sugar
    3) 1 teaspoon vanilla extract
    4) 4 large eggs
    5) 1 cup sour cream
    6) ¼ cup all-purpose flour (optional, for a firmer texture)

    For the topping (optional):
    1) Fresh fruit, chocolate sauce, or caramel sauce
    ";

    $process = "
    Instructions:
    Preheat the Oven to 325°F (160°C).

    Prepare the Crust:
    Combine graham cracker crumbs, sugar, and melted butter.
    Press mixture into a 9-inch springform pan and bake for 10 minutes.

    Make the Filling:
    Beat softened cream cheese with sugar and vanilla.
    Add eggs one at a time. Add sour cream and flour (optional).

    Pour the Filling:
    Pour over the cooled crust and bake for 55-70 minutes.
    Turn off the oven and let it cool for an hour, then refrigerate.

    Serve:
    Top with fresh fruit or sauce and serve.
    ";
}
else if($imgid == 'two'){
    $firstline = "Here's a flavorful chicken biryani recipe for you!";
    $ingredients = "
    For the chicken marinade:

        1)1 ½ lbs (700g) chicken, cut into pieces
        2)1 cup plain yogurt
        3)2 tablespoons ginger-garlic paste
        4)2 teaspoons red chili powder
        5)1 teaspoon turmeric powder
        6)2 teaspoons garam masala
        7)Salt to taste
        8)Juice of 1 lemon
        9)2 tablespoons chopped fresh cilantro
        10)2 tablespoons chopped fresh mint
    For the rice:

        1)2 cups basmati rice
        2)4 cups water
        3)2-3 whole cloves
        4)2-3 green cardamom pods
        5)1-2 bay leaves
        6)1 cinnamon stick
        7)Salt to taste
    For the biryani:

        1)2 tablespoons ghee or oil
        2)2 large onions, thinly sliced
        3)1-2 green chilies, slit (optional)
        4)½ cup fried onions (store-bought or homemade)
        5)Additional chopped cilantro and mint for garnish
    ";
    $process = "
    Marinate the Chicken:

        In a large bowl, combine yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, salt, lemon juice, cilantro, and mint.
        Add the chicken pieces, mix well, and let it marinate for at least 1 hour (or overnight in the refrigerator for best results).
    Prepare the Rice:

        Rinse the basmati rice under cold water until the water runs clear. Soak it in water for 30 minutes, then drain.
        In a large pot, bring 4 cups of water to a boil. Add whole cloves, cardamom pods, bay leaves, cinnamon stick, and salt.
        Add the soaked and drained rice to the boiling water. Cook until the rice is 70% cooked (about 5-7 minutes), then drain and set aside.
    Cook the Chicken:

        In a large, heavy-bottomed pot or Dutch oven, heat ghee or oil over medium heat.
        Add the sliced onions and sauté until golden brown.
        Add the marinated chicken and green chilies (if using). Cook until the chicken is browned and cooked through (about 10-15 minutes).
    Layer the Biryani:

        Once the chicken is cooked, reduce the heat to low. Layer the partially cooked rice over the chicken.
        Sprinkle fried onions, additional chopped cilantro, and mint on top.
    Dum Cooking:

        Cover the pot with a tight-fitting lid. You can seal it with dough or a clean kitchen towel to trap the steam.
        Cook on low heat for about 25-30 minutes to allow the flavors to meld and the rice to finish cooking.
    Serve:

        Gently fluff the biryani with a fork before serving.
        Serve hot with raita (yogurt sauce) or salad.
        Enjoy your delicious chicken biryani!    ";
}
else if($imgid == 'three'){
    $firstline="Here's a rich and fudgy chocolate brownie recipe for you!";
    $ingredients = "
        1)1 cup (225g) unsalted butter
        2)2 cups (400g) granulated sugar
        3)4 large eggs
        4)1 teaspoon vanilla extract
        5)1 cup (125g) all-purpose flour
        6)1 cup (90g) unsweetened cocoa powder
        7)½ teaspoon salt
        8)½ teaspoon baking powder
        9)1 cup (175g) chocolate chips or chopped nuts (optional)
    ";
    $process = "
    Preheat the Oven:
        Preheat your oven to 350°F (175°C). Grease and line a 9x13 inch (23x33 cm) baking pan with parchment paper.

    Melt the Butter:
        In a medium saucepan, melt the butter over low heat. Remove from heat and let it cool slightly.

    Mix in Sugar and Eggs:

        Stir in the granulated sugar until well combined.
        Add the eggs one at a time, mixing well after each addition.
        Stir in the vanilla extract.
    Combine Dry Ingredients:
        In a separate bowl, whisk together the flour, cocoa powder, salt, and baking powder.

    Combine Wet and Dry Ingredients:
        Gradually add the dry ingredients to the wet mixture, stirring until just combined. Be careful not to overmix.

    Add Chocolate Chips (Optional):
        If using, fold in the chocolate chips or nuts.

    Pour into the Pan:
        Pour the brownie batter into the prepared baking pan, spreading it evenly.

    Bake:
        Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs (not wet batter).

    Cool and Serve:
        Allow the brownies to cool in the pan for about 10 minutes before transferring them to a wire rack to cool completely.
        Once cooled, cut into squares and enjoy!

    Enjoy your delicious chocolate brownies!
    ";
}
else if($imgid == 'four'){
    $firstline="Here's a tasty chicken pizza recipe for you!";
    $ingredients = "
    For the pizza dough:

        1)2 ¼ teaspoons (1 packet) active dry yeast
        2)1 ½ cups warm water (about 110°F or 43°C)
        3)3 ½ to 4 cups all-purpose flour
        4)2 tablespoons olive oil
        5)1 teaspoon sugar
        6)1 teaspoon salt
    For the chicken topping:

        1)1 cup cooked chicken, shredded or diced
        2)1 tablespoon olive oil
        3)1 teaspoon garlic powder
        4)1 teaspoon paprika
        5)Salt and pepper to taste
    For the pizza assembly:

        1)1 cup pizza sauce (store-bought or homemade)
        2)2 cups shredded mozzarella cheese
        3)½ cup sliced bell peppers (optional)
        4)½ cup sliced red onion (optional)
        5)½ teaspoon dried oregano or Italian seasoning (optional)
        6)Fresh basil leaves for garnish (optional)
    ";
    $process = "
    Make the Pizza Dough:

        In a small bowl, dissolve the yeast and sugar in warm water. Let it sit for about 5-10 minutes until frothy.
        In a large mixing bowl, combine 3 ½ cups of flour and salt. Make a well in the center and add the yeast mixture and olive oil.
        Mix until a dough forms. If the dough is too sticky, gradually add more flour until it’s manageable.
        Knead the dough on a floured surface for about 5-7 minutes until smooth and elastic.
        Place the dough in a greased bowl, cover with a clean cloth, and let it rise in a warm place for about 1 hour, or until doubled in size.
    Prepare the Chicken Topping:

        In a bowl, combine the cooked chicken, olive oil, garlic powder, paprika, salt, and pepper. Mix well and set aside.
    Preheat the Oven:

        Preheat your oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.
    Shape the Pizza:

        Once the dough has risen, punch it down and divide it into two portions for two pizzas or keep it whole for one large pizza.
        Roll out the dough on a floured surface to your desired thickness (about ¼ inch thick).
        Transfer the rolled-out dough to a pizza peel or a baking sheet lined with parchment paper.
    Assemble the Pizza:

        Spread pizza sauce evenly over the dough.
        Sprinkle shredded mozzarella cheese on top.
        Distribute the seasoned chicken evenly over the cheese.
        Add sliced bell peppers and red onion if desired.
        Sprinkle with dried oregano or Italian seasoning for extra flavor.
    Bake the Pizza:

        Carefully transfer the pizza to the preheated oven (or onto the pizza stone).
        Bake for about 12-15 minutes, or until the crust is golden and the cheese is bubbly and melted.
    Serve:

        Remove the pizza from the oven and let it cool for a few minutes.
        Garnish with fresh basil leaves if desired, slice, and enjoy!
        Enjoy your delicious chicken pizza!
    ";
}
else if($imgid == 'five'){
    $firstline = "Here’s a simple and delicious recipe for sautéed eggs with avocado on the side!";
    $ingredients   = "
        1)4 large eggs
        2)1 tablespoon olive oil or butter
        3)Salt and pepper to taste
        4)1 ripe avocado
        5)1 tablespoon lime or lemon juice
        6)Optional toppings: red pepper flakes, fresh herbs (like cilantro or parsley), or sliced tomatoes
    ";
    $process = "
    Prepare the Avocado:

        Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.
        Mash it slightly with a fork, adding lime or lemon juice, salt, and pepper to taste. Set aside.
    Sauté the Eggs:

        In a non-stick skillet, heat the olive oil or butter over medium heat.
        Crack the eggs into the skillet. You can cook them sunny-side up, over-easy, or scrambled, depending on your preference.
        Season with salt and pepper. Cook until the whites are set and the yolks are cooked to your liking (about 2-4 minutes for sunny-side up).
    Serve:

        Plate the sautéed eggs alongside the mashed avocado.
        Add optional toppings such as red pepper flakes, fresh herbs, or sliced tomatoes if desired.
        Enjoy your sautéed eggs with avocado!
    ";
}
else if($imgid == 'six'){
    $firstline="Here’s a classic pancake recipe for you!";
    $ingredients = "
        1)1 cup all-purpose flour
        2)2 tablespoons sugar
        3)1 tablespoon baking powder
        4)½ teaspoon salt
        5)1 cup milk
        6)1 large egg
        7)2 tablespoons melted butter (plus extra for cooking)
        8)1 teaspoon vanilla extract (optional)
    ";
    $process = "
    Mix Dry Ingredients:

        In a large bowl, whisk together the flour, sugar, baking powder, and salt.
    Combine Wet Ingredients:

        In another bowl, mix the milk, egg, melted butter, and vanilla extract until well combined.
    Combine Both Mixtures:

        Pour the wet ingredients into the dry ingredients. Stir gently until just combined. It’s okay if there are a few lumps; do not overmix.
    Preheat the Pan:

        Heat a non-stick skillet or griddle over medium heat. Add a little butter to coat the surface.
    Cook the Pancakes:

        Pour about ¼ cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface (about 2-3 minutes), then flip and cook for another 1-2 minutes until golden brown.
    Serve:

        Keep the pancakes warm in a low oven while you cook the remaining batter.
        Serve with your favorite toppings like maple syrup, fresh fruit, whipped cream, or nuts.
        Enjoy your delicious pancakes!
    ";
}
else if($imgid == 'seven'){
    $firstline='Heres a simple and delicious ramen recipe for you!';
    $ingredients = "
    For the broth:

        1)4 cups chicken or vegetable broth
        2)2 cups water
        3)2 tablespoons soy sauce
        4)1 tablespoon miso paste (optional)
        5)1 tablespoon sesame oil
        6)1-inch piece of ginger, sliced
        7)2 cloves garlic, minced
    For the ramen:

        1)2 servings of ramen noodles (fresh or dried)
        2)1 cup cooked chicken, sliced (or tofu for a vegetarian option)
        3)2 soft-boiled eggs (optional)   
        4)1 cup spinach or bok choy
        5)½ cup sliced mushrooms (shiitake or button)
        6)2 green onions, sliced
        7)Nori (seaweed) sheets, for garnish
        8)Sesame seeds, for garnish
    ";
    $process = "
    Prepare the Broth:

        In a large pot, combine the chicken or vegetable broth, water, soy sauce, miso paste, sesame oil, ginger, and garlic.
        Bring to a simmer and let it cook for about 15-20 minutes to allow the flavors to meld. Remove the ginger slices before serving.
    Cook the Ramen Noodles:

        In a separate pot, cook the ramen noodles according to the package instructions. Drain and set aside.
    Assemble the Ramen:

        Divide the cooked noodles into bowls.
        Pour the hot broth over the noodles.
        Top with sliced chicken or tofu, soft-boiled eggs, spinach or bok choy, mushrooms, and green onions.
    Garnish and Serve:

        Add nori sheets and sprinkle with sesame seeds.
        Serve hot and enjoy!
        Feel free to customize your ramen with additional toppings like corn, bamboo shoots, or chili oil! Enjoy your homemade ramen!
    ";
}


$message = "
Hello $name,

Thanks for choosing our platform to share your recipe.
$firstline

Ingredients: 
$ingredients

Steps: 
$process
";

$from = "sreerajmutha@gmail.com";
$headers = "From: $from";

$check = mail($to, $sub, $message, $headers);

if ($check) {
    echo "Email sent";
} else {
    echo "Email not sent successfully";
}
?>
