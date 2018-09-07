package valor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ValorService extends GenericService<Valor>   {

    @Autowired
	private ValorDAO valorDAO;
	
	
}
