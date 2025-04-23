import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import myImage from "@/assets/dishImages/Cantonese-Salt-and-Pepper-Squid-7-of-9.jpg";

type Props = {
  params: Promise<{ id: string }>;
};

const fetchRecipeById = async (recipeId: string) => {
  const supabase = await createClient();

  const { data: recipe, error } = await supabase
    .from("recipes")
    .select(
      `
        *,
        ingredient_groups (
          *,
          ingredients (*)
        ),
        steps (*)
      `
    )
    .eq("id", recipeId)
    .single(); // Fetch a single recipe by unique ID

  if (error) {
    throw new Error(error.message);
  }
  return recipe;
};

const RecipePage = async (props: Props) => {
  const { params } = props;
  const { id: recipeId } = await params;

  try {
    const recipe = await fetchRecipeById(recipeId);
    const { ingredient_groups, steps } = recipe;
    const ingredients = ingredient_groups[0].ingredients[0].ingredient_list;
    const stepList = steps[0].step_list;

    const printIngredients = () => {
      const ingredientsList = ingredients.map(
        (ingredient: string, index: number) => {
          return (
            <ol key={`ingredient-${index}`}>
              <li>{ingredient}</li>
            </ol>
          );
        }
      );
      return ingredientsList;
    };

    const printDirections = () => {
      const directions = stepList.map((step: string, index: number) => {
        return (
          <ol key={`step-${index}`}>
            <li className="mb-3">
              <span className="font-bold">{`${index + 1}. `}</span>
              {step}
            </li>
          </ol>
        );
      });
      return directions;
    };

    if (!recipe) {
      return <div>Recipe not found</div>;
    }

    return (
      <div className="flex flex-col gap-4 px-4">
        <span className="text-center text-5xl font-bold capitalize">
          {recipe.title}
        </span>
        <div className="flex flex-row gap-4 h-[412px]">
          <div className="flex flex-col gap-y-2 w-1/4 bg-white/40 rounded-lg h-fit text-lg p-4">
            <span className="text-2xl font-bold">Ingredients:</span>
            <div>{printIngredients()}</div>
          </div>
          <div className="bg-[url('/images/dishes/Cantonese-Salt-and-Pepper-Squid-7-of-9.jpg')] bg-cover bg-center rounded-lg h-full w-3/4 overflow-hidden"></div>
        </div>
        <div className="flex flex-col gap-y-2 bg-white/40 rounded-lg h-fit p-6">
          <span className="text-2xl font-bold">Directions:</span>
          <div>{printDirections()}</div>
        </div>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
};

export default RecipePage;
