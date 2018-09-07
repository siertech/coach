package rodadavida;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;

@Entity
@Table(name = "rodadavida")
@Getter @Setter
public  class RodaDaVida extends CrudClass {

	@ElementCollection(targetClass=String.class,fetch=FetchType.EAGER)
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private Map<String,String> metricas = new HashMap<String,String>();

}
