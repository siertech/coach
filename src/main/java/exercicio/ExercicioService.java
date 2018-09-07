package exercicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ExercicioService extends GenericService<Exercicio>   {

    @Autowired
	private ExercicioDAO exercicioDAO;
	
	
}
