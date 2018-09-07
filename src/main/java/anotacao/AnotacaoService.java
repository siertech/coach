package anotacao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class AnotacaoService extends GenericService<Anotacao>   {

    @Autowired
	private AnotacaoDAO anotacaoDAO;
	
	
}
