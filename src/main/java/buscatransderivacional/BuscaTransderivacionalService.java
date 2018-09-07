package buscatransderivacional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class BuscaTransderivacionalService extends GenericService<BuscaTransderivacional>   {

    @Autowired
	private BuscaTransderivacionalDAO buscatransderivacionalDAO;
	
	
}
