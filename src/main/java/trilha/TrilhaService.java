package trilha;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class TrilhaService extends GenericService<Trilha>   {

    @Autowired
	private TrilhaDAO trilhaDAO;
	
	
}
